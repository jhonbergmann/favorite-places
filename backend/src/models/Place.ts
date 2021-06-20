import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './Image'

@Entity('places')
export default class Place {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  title: string

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  city: string

  @Column()
  neighborhood: string

  @Column()
  address: string

  @Column()
  phone: string

  @Column()
  youtube: string

  @Column()
  text: string

  @OneToMany(() => Image, image => image.place, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'place_id' })
  images: Image[]
}