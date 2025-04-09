export const RecentSearches = ({ searches, onSearch }) => {
    if (searches.length === 0) return null
  
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Recent Searches</h3>
        <div className="flex flex-wrap gap-2">
          {searches.map((city, index) => (
            <button
              key={index}
              onClick={() => onSearch(city)}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors recentsearches"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    )
  }