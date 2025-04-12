import { HttpResponse, Provinces } from '@models';
import useSWR from 'swr';

export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return response.json();
};
// Fetch cities by region ID
export const useProvinces = (search: string = '') => {
  const baseUrl = 'https://open.oapi.vn/location/provinces?page=0&size=1000';
  const params = {
    query: search,
  };
  const query = new URLSearchParams(params as Record<string, string>).toString();
  const url = search ? `${baseUrl}?${query}` : baseUrl;
  const { data, error, isLoading } = useSWR<HttpResponse<Provinces[]>>(url, fetcher);

  return { data, error, isLoading };
};

export const useDistricts = (search: string, provinceId: string) => {
  const baseUrl = `https://open.oapi.vn/location/districts/${provinceId}`;
  const params = {
    query: search,
  };
  const query = new URLSearchParams(params as Record<string, string>).toString();
  const url = search ? `${baseUrl}?${query}` : baseUrl;
  const { data, error, isLoading } = useSWR<Provinces[]>(url, fetcher);
  return { data, error, isLoading };
};

// Fetch wards by region ID, city ID, and district ID
export const useWards = (search: string, districtId: string) => {
  const baseUrl = `https://open.oapi.vn/location/wards/${districtId}`;
  const params = {
    query: search,
  };
  const query = new URLSearchParams(params as Record<string, string>).toString();
  const url = search ? `${baseUrl}?${query}` : baseUrl;
  const { data, error, isLoading } = useSWR<Provinces[]>(url, fetcher);
  return { data, error, isLoading };
};
