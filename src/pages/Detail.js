import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../store/actions/productById'
import DetailComponent from '../components/DetailComponent'

function Detail () {
  const { id } = useParams()
  const { productById, isLoading } = useSelector((state) => state.products)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getDetail(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // <>
    //  {
    //    JSON.stringify(productById)
    //  }
    //  <a href="/">home</a>
    // </>

      <>
      {
        isLoading ? (
          <div className="spinner-border m-5" role="status"></div>
        ) : (
            <>
            {
              productById.map(productDetail => {
                return <DetailComponent key={ productDetail.id } productDetail={ productDetail} />
              })
            }
            </>
        )
      }
    </>
  )
}

export default Detail