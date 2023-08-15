import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'key', label: 'Key', minWidth: 50 },
  { id: 'summary', label: 'Summary', minWidth: 200 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'category', label: 'Category', minWidth: 100 },
  { id: 'assignTo', label: 'Assign To', minWidth: 100 },
  { id: 'dueDate', label: 'Due Date', minWidth: 100 },
];

// Sample data for 15 rows
const rows = [
  { key: 1, summary: 'Task 1', status: 'In Progress', category: 'Development', assignTo: 'John Doe', dueDate: '2023-07-31' },
  { key: 2, summary: 'Task 2', status: 'Pending', category: 'Design', assignTo: 'Jane Smith', dueDate: '2023-08-10' },
  { key: 3, summary: 'Task 3', status: 'Completed', category: 'Testing', assignTo: 'Mike Johnson', dueDate: '2023-08-15' },
  { key: 4, summary: 'Task 4', status: 'In Progress', category: 'Development', assignTo: 'Emily Brown', dueDate: '2023-08-05' },
  { key: 5, summary: 'Task 5', status: 'Pending', category: 'Design', assignTo: 'Chris Lee', dueDate: '2023-08-20' },
  { key: 6, summary: 'Task 6', status: 'Completed', category: 'Testing', assignTo: 'Anna Wilson', dueDate: '2023-08-25' },
  { key: 7, summary: 'Task 7', status: 'In Progress', category: 'Development', assignTo: 'David Harris', dueDate: '2023-08-18' },
  { key: 8, summary: 'Task 8', status: 'Pending', category: 'Design', assignTo: 'Julia Taylor', dueDate: '2023-08-28' },
  { key: 9, summary: 'Task 9', status: 'Completed', category: 'Testing', assignTo: 'Robert Martin', dueDate: '2023-09-02' },
  { key: 10, summary: 'Task 10', status: 'In Progress', category: 'Development', assignTo: 'Linda Allen', dueDate: '2023-09-08' },
  { key: 11, summary: 'Task 11', status: 'Pending', category: 'Design', assignTo: 'Samuel Clark', dueDate: '2023-09-12' },
  { key: 12, summary: 'Task 12', status: 'Completed', category: 'Testing', assignTo: 'Catherine White', dueDate: '2023-09-18' },
  { key: 13, summary: 'Task 13', status: 'In Progress', category: 'Development', assignTo: 'William Brown', dueDate: '2023-09-25' },
  { key: 14, summary: 'Task 14', status: 'Pending', category: 'Design', assignTo: 'Jennifer Davis', dueDate: '2023-09-30' },
  { key: 15, summary: 'Task 15', status: 'Completed', category: 'Testing', assignTo: 'Daniel Evans', dueDate: '2023-10-05' },
  { key: 16, summary: 'Task 16', status: 'In Progress', category: 'Development', assignTo: 'Karen Johnson', dueDate: '2023-10-10' },
  { key: 17, summary: 'Task 17', status: 'Pending', category: 'Design', assignTo: 'Michael Brown', dueDate: '2023-10-15' },
  { key: 18, summary: 'Task 18', status: 'Completed', category: 'Testing', assignTo: 'Sophia Wilson', dueDate: '2023-10-20' },
  { key: 19, summary: 'Task 19', status: 'In Progress', category: 'Development', assignTo: 'Joseph Taylor', dueDate: '2023-10-25' },
  { key: 20, summary: 'Task 20', status: 'Pending', category: 'Design', assignTo: 'Olivia Harris', dueDate: '2023-10-30' },
  { key: 21, summary: 'Task 21', status: 'Completed', category: 'Testing', assignTo: 'Ethan Martin', dueDate: '2023-11-05' },
  { key: 22, summary: 'Task 22', status: 'In Progress', category: 'Development', assignTo: 'Ava Smith', dueDate: '2023-11-10' },
  { key: 23, summary: 'Task 23', status: 'Pending', category: 'Design', assignTo: 'Jacob Allen', dueDate: '2023-11-15' },
  { key: 24, summary: 'Task 24', status: 'Completed', category: 'Testing', assignTo: 'Mia Davis', dueDate: '2023-11-20' },
  { key: 25, summary: 'Task 25', status: 'In Progress', category: 'Development', assignTo: 'Liam Clark', dueDate: '2023-11-25' },
  { key: 26, summary: 'Task 26', status: 'Pending', category: 'Design', assignTo: 'Isabella Evans', dueDate: '2023-11-30' },
  { key: 27, summary: 'Task 27', status: 'Completed', category: 'Testing', assignTo: 'Noah Johnson', dueDate: '2023-12-05' },
  { key: 28, summary: 'Task 28', status: 'In Progress', category: 'Development', assignTo: 'Emma Harris', dueDate: '2023-12-10' },
  { key: 29, summary: 'Task 29', status: 'Pending', category: 'Design', assignTo: 'William Taylor', dueDate: '2023-12-15' },
  { key: 30, summary: 'Task 30', status: 'Completed', category: 'Testing', assignTo: 'Olivia White', dueDate: '2023-12-20' },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const Paper = styled.div`
    padding-top: 40px;

    .rows{
      font-size: 20px;
      font-weight: 600;
      background: #F3F4F4
    }
  `

  return (
    <Paper sx={{ background: '#F3F4F4', width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className='rows'
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.key}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
