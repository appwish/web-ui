import { classnames } from 'tailwindcss-classnames'
import React from 'react'
import GraphQLConnectionTester from '../components/GraphQLConnectionTester'
import withApollo from '../lib/apollo'

const Index = () => (
  <div className={classnames('h-screen', 'flex')}>
    <GraphQLConnectionTester className={classnames('m-auto')} />
  </div>
)

export default withApollo(Index)
