'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href="/account">Account</Link>}
      {user && (
        <Link href="/logout" className={classes.logout}>
          <Image src="assets/icons/logout.svg" alt="logout button" width={24} height={24} />
          <p>Logout</p>
        </Link>
      )}
      {!user && (
        <Button
          el="link"
          label="Login"
          href="/login"
          appearance="primary"
          onClick={() => {
            window.location.href = '/login'
          }}
        />
      )}
    </nav>
  )
}
