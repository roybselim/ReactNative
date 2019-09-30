import { connect } from 'react-redux';
import { editConfig } from '../../../redux/actions';
import { ConfigPres } from '../components/config-pres';

const mapStateToProps = (state: any) => {
    return {
        config: state.config
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onServerChange: (server: any) => {
            dispatch(editConfig(server));
        },
        onAuthChange: (auth: any) => {
            dispatch(editConfig(auth))
        }
    }
}

const ConfigCtnr = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigPres);

export default ConfigCtnr;