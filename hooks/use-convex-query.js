import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const UseConvexQuery = (query, ...args) => {
  const result = useQuery(query, ...args);
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (result === undefined) {
      setIsLoading(true);
    } else {
      try {
        setData(result);
        setError(null);
      } catch (error) {
        setError(error);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [result]);

  return { data, isLoading, error };
};

export const UseConvexMutation = query => {
  const mutateFn = useMutation(query);
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await mutateFn(...args);
      setData(response);
      return response;
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading, error };
};
