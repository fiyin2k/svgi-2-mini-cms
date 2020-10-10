/** Table header. We are separating this from UserList just in case it has to carry out
 * some specific tasks like firing sort event based on the header column clicked.
*/
import React from 'react';


const UserListHeader: React.FC = () => {

  return (
    <thead>
      <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Contact First Name</th>
          <th>Contact Last Name</th>
          <th>Email</th>
          <th>Default URL Slug</th>
          <th>Active</th>
          <th>Action</th>
      </tr>
    </thead>
  );
}

export default UserListHeader;