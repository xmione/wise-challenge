import React from 'react';
import { useQuery, gql } from '@apollo/client';
import DisplayGrid from '../grid/grid'
import convertExponentialToDecimal from './functions'

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
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const divisor = 10 ** 18;
    var epoches = []
    data.epoches.forEach((i) => {
        var signalledTokens = (i.signalledTokens / divisor).toFixed(2)
        var stakeDeposited = (i.stakeDeposited / divisor).toFixed(2)
        var totalQueryFees = (i.totalQueryFees / divisor).toFixed(2)
        var taxedQueryFees = (i.taxedQueryFees / divisor).toFixed(2)
        var queryFeesCollected = (i.queryFeesCollected / divisor).toFixed(2)
        var curatorQueryFees = (i.curatorQueryFees / divisor).toFixed(2)
        var queryFeeRebates = (i.queryFeeRebates / divisor).toFixed(2)
        var totalRewards = (i.totalRewards / divisor).toFixed(2)
        var totalIndexerRewards = (i.totalIndexerRewards / divisor).toFixed(2)
        var totalDelegatorRewards = (i.totalDelegatorRewards / divisor).toFixed(2)

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