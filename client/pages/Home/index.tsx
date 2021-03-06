import * as React from 'react';
import { store } from '../../redux/store';
import { updateInitialLoad } from '../../redux/actions/initialLoadAction';
import LudwigJumbo from '../../components/svgs/ludwigJumbo';


interface IAppState {
  initialLoad: boolean
}

class Home extends React.Component <{}, IAppState>{

  constructor(props: {}) {
    super(props)
    this.state = {
      initialLoad: store.getState().initialLoad.activeInitialLoad
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({
        initialLoad: store.getState().initialLoad.activeInitialLoad
      })
    });
  }

  componentDidMount() {
    if (this.state.initialLoad) {
      setTimeout(() => store.dispatch(updateInitialLoad(false)), 2000 );
    }
  }

  render() {
    const { initialLoad } = this.state;
    const animated = initialLoad ? 'animated' : null;
    return  (
      <div id="home">
        <h1 className={`${animated}Txt`}>Welcome to<br/>LudwigThePig</h1>
        <LudwigJumbo animated={animated} />
        {/* <img className={`${animated}Img jumbo-img`} src="static/assets/pig-jumbo.png" alt="jumbo ludwig the pig"></img> */}
      </div>
    )
  }
} 
    
export default Home;