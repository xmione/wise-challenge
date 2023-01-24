import React from 'react';
import { useQuery, gql } from '@apollo/client';
import DisplayGrid from '../grid/grid'

const GET_SUBGRAPHS = gql`
{
  epoches {
    id
    startBlock
	endBlock
    signalledTokens
    stakeDeposited
    totalQueryFees
    taxedQueryFees
    queryFeesCollected
    curatorQueryFees
    queryFeeRebates
    totalRewards
    totalIndexerRewards
    totalDelegatorRewards
  }
}
`;

function DisplaySubGraphs() {
    const { loading, error, data } = useQuery(GET_SUBGRAPHS);
    debugger;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return <DisplayGrid data={data.epoches}/>;
}

export default DisplaySubGraphs;