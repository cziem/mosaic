import axios from "axios";
import React from "react";
import SearchBar from "../../components/SearchBar";
import StudentCard from "../../components/StudentCard";
import { TStudent } from "../../components/types/type";
import { HomeStyles } from "./home.styles";

type TCallback = (...args: string[]) => void
interface IResponse {
  students: TStudent[]
}

const Home = () => {
  const [studentsList, setStudentsList] = React.useState<TStudent[]>([]);

  const fetchStudents = React.useCallback<TCallback>(async () => {
    try {
      const {data} = await axios.get<IResponse>(
        "https://api.hatchways.io/assessment/students"
      );
      setStudentsList(data.students);
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

  React.useEffect(() => fetchStudents(), [fetchStudents]);

  return (
    <HomeStyles>
      <SearchBar />

      {!!studentsList.length
        ? studentsList.map((student) => (
            <StudentCard key={student.id} className="student__card" student={student} />
          ))
        : "Loading..."}
    </HomeStyles>
  );
};

export default Home;
