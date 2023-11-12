function Footer() {
  const date = new Date()

  return (
    <footer>
      <p>&copy; {date.getFullYear()}</p>
      <p>Developed by Rutgers FSF Class</p>
    </footer>
  )
}

export default Footer