import { connect } from 'react-redux';
import { HomePres } from '../components/home-pres';

const mapStateToProps = (state: any) => {
    return state;
}

// const HomeCtnr = connect(mapStateToProps)(HomePres);
const HomeCtnr = connect(mapStateToProps)(HomePres);

export default HomeCtnr;