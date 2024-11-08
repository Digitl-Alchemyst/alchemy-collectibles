export default function formatTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

// This is used to format the title of the category to be used in the URL for sorting blogs by their category.
// It returns all lower case and replaces all non-alphanumeric characters with a dash.
