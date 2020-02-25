import { classnames } from 'tailwindcss-classnames'
import gql from 'graphql-tag'
import { useLazyQuery } from '@apollo/react-hooks'

const ALL_WISHES_QUERY = gql`
  query {
    allWish {
      id
      title
      markdown
    }
  }
`

const GraphQLConnectionTester = ({ className }) => {
  const [queryWishes, { called, data, error }] = useLazyQuery(ALL_WISHES_QUERY)

  const loadWishes = () => queryWishes()

  return (
    <div
      className={classnames(
        className,
        'max-w-sm',
        'rounded',
        'overflow-hidden',
        'shadow-lg'
      )}
    >
      <div className={classnames('px-6', 'py-4')}>
        <div className={classnames('font-bold', 'text-xl', 'mb-2')}>
          Testing GraphQL Connection
        </div>
        <h5>Query:</h5>
        <p className={classnames('text-gray-700', 'text-base', 'mb-3')}>
          query &#123; allWish &#123; id title markdown &#125; &#125;
        </p>
        <h5>Response:</h5>
        <p className={classnames('text-gray-700', 'text-base')}>
          {error != null && JSON.stringify(error)}
          {called ? JSON.stringify(data) : 'Send query to see the response'}
        </p>
      </div>
      <button
        type="button"
        className={classnames(
          'bg-blue-500',
          'hover:bg-blue-700',
          'text-white',
          'font-bold',
          'py-2',
          'px-4',
          'block',
          'w-full'
        )}
        onClick={loadWishes}
      >
        Send Query
      </button>
    </div>
  )
}

export default GraphQLConnectionTester
