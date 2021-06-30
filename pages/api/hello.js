// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default (req, res) => {
  Gallery.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
}
