import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Place from './Place'

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  path: string

  @ManyToOne(() => Place, place => place.images)
  @JoinColumn({ name: 'place_id' })
  place: Place
}