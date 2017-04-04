import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: '#C0EBD7',
    },

    image1: {
      position: 'relative',
      width: '33.33%',
      height: '50%',
      transition: 'all 1s ease',
      ':hover': {
           opacity: '0.3',
           transform: 'rotateY(180deg)',
           transition: 'all 1s ease-in-out'
       }
    },

    image2: {
        position: 'relative',
        width: '33.33%',
        height: '50%',
        transition: 'all 0.5s ease',
       ':hover': {
           opacity: '0.3',
           border: '2px solid',
           borderRadius: '50%',
           transform: 'rotate(360deg)'
        }
    },

    welcome: {
      margin: '8% 30%',
    },

    link: {
      top: '0',
      left: '0',
      fontSize: '30px',
      color: '#006600',
      textShadow: '2px 2px 4px #ffffff',
      fontWeight: 'bold',
      ':hover': {
        textDecoration: 'underline',
        fontSize: '35px'
      },
      ':active': {
          textDecoration: 'underline'
      }
    }

});

class Welcome extends React.Component {
	render() {
    return <div className={css(styles.container)} >
      <img className={css(styles.image1)} src={require('img/welcome1.jpg')}/>
      <img className={css(styles.image1)} src={require('img/welcome2.jpg')}/>
      <img className={css(styles.image1)} src={require('img/welcome3.jpg')}/>
      <img className={css(styles.image1)} src={require('img/welcome4.jpg')}/>
      <img className={css(styles.image1)} src={require('img/welcome5.jpg')}/>
      <img className={css(styles.image1)} src={require('img/welcome6.jpg')}/>

      <div className={css(styles.welcome)}>
        <a href="travel-planning" className={css(styles.link)}>Welcome to CentsTrip!</a>
      </div>
    </div>
  }
}

export default Welcome
