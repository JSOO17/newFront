import React from 'react'

const TableHistory = (props) => (

	<table class="table table-dark">
		<thead>
			<tr>
			    <th scope="col">City</th>
			    <th scope="col">Searched At</th>
			</tr>
		</thead>
		<tbody>
			{ props.data.map((history) => {
      		return (
      			<tr>
					<td>{history.nameCity}</td>
					<td>{history.searchedAt}</td>
				</tr>

      			)
      		
      		})}
		</tbody>
	</table>

)

export default TableHistory