import debounce from "lodash.debounce";
import React from "react";

interface SearchProps {
  name: string;
  onValueChange: (value: string) => void;
  debounceTime?: number;
  placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({
  name,
  onValueChange,
  debounceTime = 500,
  placeholder = "Search...",
}) => {
  const onChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onValueChange(value);
  }, debounceTime);

  return (
    <input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={name}
    />
  );
};
