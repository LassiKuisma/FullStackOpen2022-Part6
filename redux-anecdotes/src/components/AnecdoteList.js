import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ content, votes, handleClick }) => {
    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)
    const anecdotesSorted = anecdotes.slice().sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {anecdotesSorted.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    content={anecdote.content}
                    votes={anecdote.votes}
                    handleClick={() => {
                        dispatch(voteAnecdote(anecdote.id))
                        dispatch(setNotification(`You voted '${anecdote.content}'`))

                        setTimeout(() => {
                            dispatch(clearNotification())
                        }, 5000)
                    }
                    }
                />
            )}
        </div>
    )
}

export default AnecdoteList
