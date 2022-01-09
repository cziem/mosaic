import axios from "axios"
import React from "react"
import SearchBar from "../../components/SearchBar"
import StudentCard from "../../components/StudentCard"
import { TInputChange, TStudent } from "../../components/types/type"
import { HomeStyles } from "./home.styles"

type TCallback = (...args: string[]) => void
interface IResponse {
  students: TStudent[]
}

const Home = () => {
  const [loading, setLoading] = React.useState(false)
  const [studentsList, setStudentsList] = React.useState<TStudent[]>([])
  const [searchTerm, setSearchTerm] = React.useState("")

  const handleChange: TInputChange = ({ target }) => {
    setSearchTerm(target.value.toLowerCase())
  }

  const fetchStudents = React.useCallback<TCallback>(async () => {
    try {
      setLoading(true)
      const { data } = await axios.get<IResponse>(
        "https://api.hatchways.io/assessment/students"
      )
      setStudentsList(data.students)
      setLoading(false)
    } catch (error) {
      console.log(error, "error")
    }
  }, [])

  React.useEffect(() => fetchStudents(), [fetchStudents])

  const computeList = (): JSX.Element[] | string => {
    if (loading) {
      return "Loading..."
    } else if (!!searchTerm && !!studentsList.length) {
      return studentsList
        .filter(
          (student) =>
            student.firstName.toLowerCase().includes(searchTerm) ||
            student.lastName.toLowerCase().includes(searchTerm) ||
            student.company.toLowerCase().includes(searchTerm) ||
            student.email.toLowerCase().includes(searchTerm) ||
            student.skill.toLowerCase().includes(searchTerm)
        )
        .map((student) => (
          <StudentCard
            key={student.id}
            className="student__card"
            student={student}
          />
        ))
    } else if (!!studentsList.length) {
      return studentsList.map((student) => (
        <StudentCard
          key={student.id}
          className="student__card"
          student={student}
        />
      ))
    } else return "No student data available"
  }

  return (
    <HomeStyles>
      <SearchBar handleChange={handleChange} searchTerm={searchTerm} />

      {computeList()}
    </HomeStyles>
  )
}

export default Home
