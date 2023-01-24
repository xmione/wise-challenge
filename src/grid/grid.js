import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function DisplayGrid(props) {
    debugger;
    const rows: GridRowsProp = props.data;
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 25 },
        { field: 'startBlock', headerName: 'Start Block', width: 150 },
        { field: 'endBlock', headerName: 'End Block', width: 150 },
        { field: 'signalledTokens', headerName: 'Signalled Tokens', width: 150 },
        { field: 'stakeDeposited', headerName: 'Stake Deposited', width: 150 },
        { field: 'totalQueryFees', headerName: 'Total Query Fees', width: 150 },
        { field: 'taxedQueryFees', headerName: 'Taxed Query Fees', width: 150 },
        { field: 'queryFeesCollected', headerName: 'Query Fees Collected', width: 150 },
        { field: 'curatorQueryFees', headerName: 'Curator Query Fees', width: 150 },
        { field: 'queryFeeRebates', headerName: 'Query Fee Rebates', width: 150 },
        { field: 'totalRewards', headerName: 'Total Rewards', width: 150 },
        { field: 'totalIndexerRewards', headerName: 'Total Indexer Rewards', width: 150 },
        { field: 'totalDelegatorRewards', headerName: 'Total Delegator Rewards', width: 150 },
    ];


    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}


export default DisplayGrid;