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
    const divisor = 10 ^ 18;
    var epoches = []
    data.epoches.forEach((i) => {
        var signalledTokens = i.signalledTokens / divisor
        var stakeDeposited = i.stakeDeposited / divisor
        var totalQueryFees = i.totalQueryFees / divisor
        var taxedQueryFees = i.taxedQueryFees / divisor
        var queryFeesCollected = i.queryFeesCollected / divisor
        var curatorQueryFees = i.curatorQueryFees / divisor
        var queryFeeRebates = i.queryFeeRebates / divisor
        var totalRewards = i.totalRewards / divisor
        var totalIndexerRewards = i.totalIndexerRewards / divisor
        var totalDelegatorRewards = i.totalDelegatorRewards / divisor

        epoches.push({
            'id': i.id,
            'startBlock': i.startBlock,
            'endBlock': i.endBlock,
            'signalledTokens': signalledTokens,
            'stakeDeposited': stakeDeposited,
            'totalQueryFees': totalQueryFees,
            'taxedQueryFees': taxedQueryFees,
            'queryFeesCollected': queryFeesCollected,
            'curatorQueryFees': curatorQueryFees,
            'queryFeeRebates': queryFeeRebates,
            'totalRewards': totalRewards,
            'totalIndexerRewards': totalIndexerRewards,
            'totalDelegatorRewards': totalDelegatorRewards
        });
    });


    return <DisplayGrid data={epoches}/>;
}

export default DisplaySubGraphs;