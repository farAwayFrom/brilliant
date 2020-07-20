import Mock from 'mockjs'
import result from '@/utils/result'

Mock.mock(/\/user\/login/, 'post', result.success(true))
