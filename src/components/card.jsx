import Link from 'next/link'
import { ReactComponent as CommentImg } from '../../public/comment.svg'
import { ReactComponent as LikeImg } from '../../public/heart.svg'

const CardHeader = () => (
  <div className="flex border-2 border-gray-200 h-16">
    <img
      className="inline max-w-xs flex-end self-center h-10 mx-4"
      src="/hero.png"
      alt="Author profile"
    />
    <span className="self-center">Elliot</span>
    <span className="self-center ml-auto mr-4">12H</span>
  </div>
)

const CardImage = () => (
  <div className="h-64">
    <img className="w-full h-64" src="/imgPlaceholder.png" alt="Card img" />
  </div>
)

const LikesAndComments = () => (
  <div className="flex">
    <div>
      <CommentImg className="m-4 inline-block" />
      <span className="align-middle">3 Comments</span>
    </div>
    <div className="content-center self-center ml-auto mr-4">
      <LikeImg className="align-text-bottom inline-block" />
      <span className=""> 17 Likes</span>
    </div>
  </div>
)

const CardContent = () => (
  <div className="px-6 py-8">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.
    </p>
  </div>
)

const Card = ({ expanded }) => {
  return (
    <Link href="/wish">
      <div
        style={{ width: expanded ? '65%' : '30%' }}
        className="cursor-pointer inline-block shadow-md mt-8"
      >
        <CardHeader />
        <CardImage />
        <LikesAndComments />
        <hr />
        <CardContent />
      </div>
    </Link>
  )
}

export default Card
