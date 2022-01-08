import axios from "axios";
import React from "react";
import SearchBar from "../../components/SearchBar";
import StudentCard from "../../components/StudentCard";
import { HomeStyles } from "./home.styles";

const Home = () => {
  const [studentsList, setStudentsList] = React.useState([]);

  const fetchStudents = React.useCallback(async () => {
    try {
      const { data } = await axios.get(
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
            <StudentCard className="student__card" student={student} />
          ))
        : "Loading..."}
    </HomeStyles>
  );
};

export default Home;
