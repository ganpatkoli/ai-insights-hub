import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/blog";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['All', 'AI Info', 'AI Safety', 'AI Tools', 'AI Hacks'];

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="transition-all"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
