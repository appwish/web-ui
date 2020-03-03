const Filters = () => (
  <div className="flex items-start w-1/2 m-auto mt-5">
    <p
      onClick={() => alert('Filtering')}
      className="flex-1 text-gray-700 font-bold text-center m-2 cursor-pointer"
    >
      FEED
    </p>
    <p className="flex-1 text-gray-700 font-bold text-center m-2">|</p>
    <p
      onClick={() => alert('Filtering')}
      className="flex-1 text-gray-700 font-bold text-center m-2 cursor-pointer"
    >
      WEEK
    </p>
    <p
      onClick={() => alert('Filtering')}
      className="flex-1 text-gray-700 font-bold text-center m-2 cursor-pointer"
    >
      MONTH
    </p>
    <p
      onClick={() => alert('Filtering')}
      className="flex-1 text-gray-700 font-bold text-center m-2 cursor-pointer"
    >
      YEAR
    </p>
    <p className="flex-1 text-gray-700 font-bold text-center m-2">|</p>
    <p
      onClick={() => alert('Filtering')}
      className="flex-1 text-gray-700 font-bold text-center m-2 cursor-pointer"
    >
      LATEST
    </p>
  </div>
)

export default Filters
