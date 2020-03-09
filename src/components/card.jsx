import Link from 'next/link'
import { ReactComponent as CommentImg } from '../../public/comment.svg'
import { ReactComponent as LikeImg } from '../../public/heart.svg'

const CardHeader = () => (
  <div className="flex h-16 border-2 border-gray-200">
    <img
      className="self-center inline h-10 max-w-xs mx-4 flex-end"
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
      <CommentImg className="inline-block m-4" />
      <span className="align-middle">3 Comments</span>
    </div>
    <div className="content-center self-center ml-auto mr-4">
      <LikeImg className="inline-block align-text-bottom" />
      <span className=""> 17 Likes</span>
    </div>
  </div>
)

const CardContent = () => (
  <div className="px-6 py-8">
    <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
    <p className="text-base text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.
    </p>
  </div>
)

const Card = ({ expanded }) => {
  return (
    <Link href="/wish/description">
      <div
        style={{ width: expanded ? '65%' : '30%' }}
        className="inline-block mt-8 shadow-lg cursor-pointer hover:shadow-md"
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
