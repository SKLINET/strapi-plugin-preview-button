import { useState, useEffect } from 'react';
import { useFetchClient } from '@strapi/admin/strapi-admin';
import { PLUGIN_ID } from '../pluginId';

export interface IContentType {
  uid: string;
  draft: {
    url: string;
    query: {
      type: string;
      slug: string;
      pageId: string;
      locale: string;
    };
  };
  published: {
    url: string;
    query: {
      type: string;
      slug: string;
      pageId: string;
      locale: string;
    };
  };
}

export interface ISettings {
  contentTypes: IContentType[];
}

export const useSettings = () => {
  const [data, setData] = useState<ISettings | null>(null);

  const { get } = useFetchClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(`/${PLUGIN_ID}/config/contentTypes`);

        if (response.data) {
          setData({
            contentTypes: response?.data || [],
          });
        } else {
          setData(null);
        }
      } catch (error) {
        setData(null);
      }
    };

    fetchData();
  }, []);

  return data;
};
