export default function Sun({ children, color, ...props }) {
    return (
      <mesh {...props} >
        {children}
       
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    )
  }