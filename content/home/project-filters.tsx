"use client";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { PlusCircle, X, FilterX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

interface Project {
  id: string;
  title: string;
  year: number;
  techStack: string[];
}

interface ProjectFilterProps {
  projects: Project[];
  onFiltersChange?: (filters: {
    search: string;
    years: number[];
    techStacks: string[];
  }) => void;
}

export const ProjectFilter = ({
  projects,
  onFiltersChange,
}: ProjectFilterProps) => {
  const [search, setSearch] = useState("");
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);

  // Extract unique years and tech stacks from projects
  const { years, techStacks } = useMemo(() => {
    const uniqueYears = Array.from(new Set(projects.map((p) => p.year))).sort(
      (a, b) => b - a,
    );
    const allTechStacks = projects.flatMap((p) => p.techStack);
    const techCountMap = allTechStacks.reduce(
      (acc, tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const uniqueTechStacks = Object.entries(techCountMap)
      .map(([tech, count]) => ({ tech, count }))
      .sort((a, b) => b.count - a.count);

    return { years: uniqueYears, techStacks: uniqueTechStacks };
  }, [projects]);

  const handleYearToggle = (year: number) => {
    const newYears = selectedYears.includes(year)
      ? selectedYears.filter((y) => y !== year)
      : [...selectedYears, year];
    setSelectedYears(newYears);
    onFiltersChange?.({
      search,
      years: newYears,
      techStacks: selectedTechStacks,
    });
  };

  const handleTechStackToggle = (tech: string) => {
    const newTechStacks = selectedTechStacks.includes(tech)
      ? selectedTechStacks.filter((t) => t !== tech)
      : [...selectedTechStacks, tech];
    setSelectedTechStacks(newTechStacks);
    onFiltersChange?.({
      search,
      years: selectedYears,
      techStacks: newTechStacks,
    });
  };

  const clearTechStackFilter = () => {
    setSelectedTechStacks([]);
    onFiltersChange?.({
      search,
      years: selectedYears,
      techStacks: [],
    });
  };

  const clearYearFilter = () => {
    setSelectedYears([]);
    onFiltersChange?.({
      search,
      years: [],
      techStacks: selectedTechStacks,
    });
  };

  const clearAllFilters = () => {
    setSelectedYears([]);
    setSelectedTechStacks([]);
    setSearch("");
    onFiltersChange?.({
      search: "",
      years: [],
      techStacks: [],
    });
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFiltersChange?.({
      search: value,
      years: selectedYears,
      techStacks: selectedTechStacks,
    });
  };

  const hasActiveFilters =
    selectedYears.length > 0 || selectedTechStacks.length > 0 || search;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {/* Clear All Button */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="border shadow-sm hover:text-accent-foreground rounded-md px-3 text-xs h-8 border-dashed bg-zinc-100/30 border-zinc-200 dark:bg-zinc-900/30 dark:border-zinc-800 hover:bg-transparent inline-flex items-center justify-center gap-2"
        >
          <X className="h-4 w-4" />
          Clear All
        </Button>
      )}

      {/* Search Input */}
      <div className="w-full sm:w-auto flex-1 min-w-[200px]">
        <Input
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="bg-zinc-100/30 border-zinc-200 dark:bg-zinc-900/30 dark:border-zinc-800 text-sm h-8"
          placeholder="Filter projects..."
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* Tech Stack Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="border shadow-sm hover:text-accent-foreground rounded-md px-3 text-xs h-8 border-dashed bg-zinc-100/30 border-zinc-200 dark:bg-zinc-900/30 dark:border-zinc-800 hover:bg-transparent inline-flex items-center justify-center gap-2 relative"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Tech{" "}
              {selectedTechStacks.length > 0 &&
                `(${selectedTechStacks.length})`}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-64 p-0 bg-zinc-100/30 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm"
          >
            <Command className="bg-transparent">
              <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3 bg-transparent">
                <CommandInput
                  placeholder="Search technologies..."
                  className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0"
                />
                {selectedTechStacks.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearTechStackFilter}
                    className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground bg-transparent"
                  >
                    <FilterX className="h-3 w-3 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
              <CommandList className="bg-transparent">
                <CommandEmpty className="bg-transparent">
                  No technologies found.
                </CommandEmpty>
                <CommandGroup className="bg-transparent">
                  <ScrollArea className="h-48 bg-transparent">
                    {techStacks.map(({ tech, count }) => (
                      <CommandItem
                        key={tech}
                        onSelect={() => handleTechStackToggle(tech)}
                        className="flex justify-between items-center bg-transparent hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50"
                      >
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={selectedTechStacks.includes(tech)}
                            onCheckedChange={() => handleTechStackToggle(tech)}
                            className="h-4 w-4"
                          />
                          <span className="truncate">{tech}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-zinc-200/50 dark:bg-zinc-700/50"
                        >
                          {count}
                        </Badge>
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Year Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="border shadow-sm hover:text-accent-foreground rounded-md px-3 text-xs h-8 border-dashed bg-zinc-100/30 border-zinc-200 dark:bg-zinc-900/30 dark:border-zinc-800 hover:bg-transparent inline-flex items-center justify-center gap-2 relative"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Year{" "}
              {selectedYears.length > 0 && (
                <>
                  <span> | </span>{" "}
                  <span className="border border-border px-1 py-0.5 rounded-sm grid place-content-center">
                    {" "}
                    {selectedYears.length}
                  </span>{" "}
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-48 p-0 bg-zinc-100/30 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm"
          >
            <Command className="bg-transparent">
              <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3 bg-transparent">
                <CommandInput
                  placeholder="Search years..."
                  className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0"
                />
                {selectedYears.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearYearFilter}
                    className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground bg-transparent"
                  >
                    <FilterX className="h-3 w-3 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
              <CommandList className="bg-transparent">
                <CommandEmpty className="bg-transparent">
                  No years found.
                </CommandEmpty>
                <CommandGroup className="bg-transparent">
                  <ScrollArea className="h-48 bg-transparent">
                    {years.map((year) => (
                      <CommandItem
                        key={year}
                        onSelect={() => handleYearToggle(year)}
                        className="flex justify-between items-center bg-transparent hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50"
                      >
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={selectedYears.includes(year)}
                            onCheckedChange={() => handleYearToggle(year)}
                            className="h-4 w-4"
                          />
                          <span>{year}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-zinc-200/50 dark:bg-zinc-700/50"
                        >
                          {projects.filter((p) => p.year === year).length}
                        </Badge>
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
