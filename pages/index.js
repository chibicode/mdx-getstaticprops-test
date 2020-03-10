export default function({ foo }) {
  return <h1>{foo}</h1>
}

export async function getStaticProps() {
  return {
    props: {
      foo: 'Hello World'
    }
  }
}
