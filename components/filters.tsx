'use client';

import { faMagnifyingGlass } from '@node_modules/@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@node_modules/@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { Col, Row } from '@node_modules/antd/es';
import { Input, Select, Skeleton } from 'antd';
import { useProvinces } from '../services/regionService';
import { Provinces } from '@models';
interface Filters {
  search: string;
  provinceId: string;
  districtId?: string;
  wardId?: string;
}
const dafaultFilters: Filters = {
  search: '',
  provinceId: '',
  districtId: '',
  wardId: '',
};
const FiltersComponent = () => {
  const [filters, setFilters] = useState<Filters>(dafaultFilters);
  const [provinces, setProvinces] = useState([] as Provinces[]);
  const { data: res, isLoading } = useProvinces('');
  const onChangeFiltersChange = (updateFilters: Partial<Filters>) => {
    setFilters({ ...filters, ...updateFilters });
  };
  useEffect(() => {
    if (res && res.data?.length > 0) {
      const updatedProvinces = [
        {
          id: '',
          name: 'Tất cả',
          type: 0,
          typeText: '',
          slug: '',
        },
        ...res.data,
      ];
      setProvinces(updatedProvinces);
    } else {
      setProvinces([]);
    }
  }, [res]);

  useEffect(() => {}, [filters]);

  return (
    <Row className="project-filters-bar justify-center">
      <Col span={20}>
        <div className="project-filters-bar-inside w-full flex flex-row items-center">
          <div className="project-search-bar-suggestion p-3">
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChangeFiltersChange({ search: e.target.value });
              }}
              className="project-filters-search border-0 py-0 focus:border-0"
              placeholder="search"
              prefix={
                <FontAwesomeIcon
                  className="filter-search-icon"
                  icon={faMagnifyingGlass}
                  style={{ fontSize: '1rem' }}
                />
              }
            />
          </div>
          <div className="vertical-line">&nbsp;</div>
          <div className="select-control flex flex-col ml-auto">
            <span className="project-filters-bar-inside-item-label">Khu Vực</span>
            {isLoading ? (
              <Skeleton
                active
                title={false}
                paragraph={{ rows: 1 }}
              />
            ) : (
              <Select
                onSelect={(value: string) => {
                  onChangeFiltersChange({ provinceId: value });
                }}
                size="small"
                loading={isLoading}
                variant="borderless"
                showSearch
                optionFilterProp="label"
                className="w-full"
                placeholder="Khu Vực"
                options={provinces?.map((option) => ({ value: option.id, label: option.name }))}
              />
            )}
          </div>
        </div>
        {/* <h1 className="header-title">Home Page</h1> */}
      </Col>
    </Row>
  );
};

export default FiltersComponent;
