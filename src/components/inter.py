import heapq


def find_k_largest(nums, k):
    heap = heapq.heapify([])
    print(heap)
    for num in nums:
        if len(heap) == k:

            heapq.heappushpop(heap, -num)

        heapq.heappush(heap, -num)

    return heap[-1]


print(find_k_largest([7, 10, 4, 3, 20, 15], 3))
