interface Props {
  message: string
}

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}
