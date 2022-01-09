export type TStudent = {
  city: string
  company: string
  email: string
  firstName: string
  lastName: string
  id: string
  pic: string
  skill: string
  grades: number[]
}

export type TInputChange = ({
  target,
}: React.ChangeEvent<HTMLInputElement>) => void
