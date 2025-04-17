import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyUp,
  placeholder = 'Search',
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full outline-none border-none focus:ring-0 focus:border-none text-sm"
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={onKeyUp}
      value={value}
    />
  );
};

export default SearchInput;
