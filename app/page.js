import * as stylex from '@stylexjs/stylex';

// Simple StyleX example
const styles = stylex.create({
  heading: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 100
  },
  text: {
    backgroundColor: 'red',
    fontSize: 50
  }
});

let isActive = false;

export default function Home() {
  return (
    <>
      <p {...stylex.props(styles.heading, isActive && styles.text)} >
        Heading
      </p>
    </>
  )
}