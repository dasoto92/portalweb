import React, {Component} from 'react';
import '../global/css/bootstrap.css';
import '../global/css/General.css';

import VideoModal from './VideoModal'
import TextModal from './TextModal'

class Table extends Component {
  render() {
    return (
      <div className="TableScroll">
        <table className="table table-hover ">
          <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Interview</th>
            <th>Interview Video</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@avantica.net</td>
            <td><TextModal/></td>
            <td><VideoModal/></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
