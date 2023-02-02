export const useCategory = () => {
  const category = useState<string>("category", () => "");

  const setCategory = (_category: string) => {
    category.value = _category;
  };
  return {
    category,
    setCategory,
  };
};
