/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useLayoutEffect } from 'react';

import * as styles from '../style';

import dropDown from '@/assets/icon/result_category/ico_drop_down.png';
import dropUp from '@/assets/icon/result_category/ico_drop_up.png';

export const DropDown = (props: { category: string[] }) => {
  const [clicked, setClicked] = useState(false);

  const result = props.category.reduce((accu: any, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  const CATEGORIES = [
    { id: 1, title: '감사', cost: result.thanks },
    { id: 2, title: '사랑', cost: result.love },
    { id: 3, title: '도움', cost: result.help },
    { id: 4, title: '응원', cost: result.cheering },
    { id: 5, title: '위로', cost: result.comfort },
    { id: 6, title: '존경', cost: result.respect },
    { id: 7, title: '존재', cost: result.existence },
    { id: 8, title: '그냥', cost: result.just },
  ];

  return (
    <div className='dropdown'>
      <button className='dropbtn' onClick={() => setClicked(!clicked)}>
        <img src={clicked ? dropUp : dropDown} alt='dropdown' />
      </button>
      {clicked && (
        <div className='dropdown-content'>
          {CATEGORIES.map((category) => (
            <div className='category' key={category.id}>
              <p>{category.title}</p>
              <p className='cost'>{category.cost ? (category.cost * 100000).toLocaleString('ko-KR') : 0}원</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
