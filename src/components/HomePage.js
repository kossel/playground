import React from 'react';
import {Link} from 'react-router';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

const HomePage = () => {
  return (
    <div>
      <div>
        <Checkbox>
          This is not clickable
        </Checkbox>
      </div>

    </div>
  );
};

export default HomePage;
