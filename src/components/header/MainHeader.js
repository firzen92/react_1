import React, {useState, useRef, useEffect, Fragment} from "react";

import classes from './MainHeader.module.scss';

const MainHeader = () => {
  const [search, setSearch] = useState('');
  const selection = useRef();
  const searchFieldInput = useRef();

  const handleSearchInput = e => {
    setSearch(e.target.value);
    console.log('kkki')
  }

  useEffect(() => {

    searchFieldInput.current.addEventListener('keydown', (e) => {
      // debugger;
      if(e.key == 'Enter') {
        console.log('make request');
        setSearch('');
        return;
      }

      // console.log('keydown ', e.target.value, e.target);
      setSearch(e.target.value);
    })

    // searchFieldInput.current.addEventListener('value-changed', (e) => {
    //   debugger;

    //   setSearch(e.target.value);
    // })

    console.log('selection ',selection);
    return () => {
      searchFieldInput.current.removeEventListener('keydown', null);
    }

  }, []);


  return (
    <div className={classes['main-header']}>
      <coral-select ref={selection} style={{height: '32px'}}>
        <coral-item selected value="aNumber">A-number</coral-item>
        <coral-item value="uuid">Machine UUID</coral-item>
        <coral-item value="accountId">Service Account ID</coral-item>
        <coral-item value="subscriberId">Subscriber ID</coral-item>
      </coral-select>
      <coral-input className={classes.inputStyles} ref={searchFieldInput} value={search} placeholder="Search" type="search"></coral-input>
      <coral-button slot="right" transparent icon="set-alert"></coral-button>
      <coral-button slot="right" transparent icon="info"></coral-button>
      <coral-button slot="right" transparent icon="settings"></coral-button>
      <coral-button slot="right" transparent icon="grc-log-out"></coral-button>
    </div>
  );
};

export default MainHeader;
