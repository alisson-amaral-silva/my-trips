import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    //screen.logTestingPlaygroundURL() isso proporciona uma visão de playground do teste

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Cangaíba',
      slug: 'cangaiba',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Penha',
      slug: 'penha',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/cangaíba/i)).toBeInTheDocument()
    expect(screen.getByTitle(/penha/i)).toBeInTheDocument()
  })
})
