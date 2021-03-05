import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {updateBreakFalse} from "../actionCreators";


const Break = (props) => { 
  const notBucle = null;
  
  useEffect(() => {
    props.updateBreakFalse();
  }, [notBucle]); 

  return (
    <div>
      <h3>Something is broken!</h3>
    </div>     
  );
}

// keys values del state
const mapStateToProps = state => {
  return {
    break: state.break
  }
}

// metodos 
const mapDispatchToProps = dispatch => {
  return {
    updateBreakFalse(){
      dispatch(updateBreakFalse());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Break);