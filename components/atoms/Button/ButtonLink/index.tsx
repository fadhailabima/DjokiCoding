import Button, { ButtonProps } from 'components/atoms/Button'
import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps extends ButtonProps {
  href: string
  newTab?: boolean;
  className?: string;
}

const ButtonLink = ({
  href,
  value,
  onClick = () => {},
  size = 'normal',
  style = 'solid',
  color = 'primary',
  radius = 'rounded',
  newTab = false, 
  className = '',
}: ButtonLinkProps) => {
  return (
    <Link href={href} passHref>
      <a
        target={newTab ? '_blank' : '_self'} 
        rel={newTab ? 'noopener noreferrer' : undefined}
        className={className}
      >
        <Button
          value={value}
          color={color}
          onClick={onClick}
          radius={radius}
          size={size}
          style={style}
        />
      </a>
    </Link>
  )
}

export default ButtonLink
export type { ButtonLinkProps }