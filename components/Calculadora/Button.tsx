type buttonProps = {
  handleClick: (label: string | number) => void,
  label: string | number
}

export default function Button({handleClick, label}:buttonProps)  {
  return (
    <button onClick={() => handleClick(label)}>
      {label}
    </button>
  )
}