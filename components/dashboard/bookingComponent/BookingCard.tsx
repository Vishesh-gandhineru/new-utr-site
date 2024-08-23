"use client"
import React from 'react';
import { Card, Badge, Typography, Space, Row, Col, Button } from 'antd';
import { BookingCardType } from '@/types/types';

const { Text, Title } = Typography;

type BookingCardProps = {
  booking: BookingCardType;
};


export default function BookingCard({ booking }: BookingCardProps) {

  const { slug, status , checkIn , checkOut , breakdown, currency } = booking;
  const BadgeColor = status === 'confirmed' ? 'green' : status === 'failed' ? 'red' : status === 'pending' ? 'blue' : 'default';
  return (
    <Card
      className="w-full max-w-md"
      cover={
        <Badge.Ribbon color={BadgeColor} className='!uppercase' text={status} >
        <div style={{ position: 'relative' }}>
          <img
            alt="Property Image"
            src="https://placehold.co/600x400"
            style={{ aspectRatio: '5/3', width: '100%', objectFit: 'cover' }}
          />
        </div>
        </Badge.Ribbon>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Row justify="space-between" align="top">
          <Col>
            <Title level={4} style={{ margin: 0 }}>{slug}</Title>
            <Text type="secondary">Santa Cruz, California</Text>
          </Col>
          <Col>
            <Title level={3} style={{ margin: 0 }}>{currency} {breakdown.total}</Title>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Text strong>Check-in</Text>
            <br />
            <Text type="secondary">{checkIn}</Text>
          </Col>
          <Col span={12}>
            <Text strong>Check-out</Text>
            <br />
            <Text type="secondary">{checkOut}</Text>
          </Col>
        </Row>
        <div>
          <Text strong>Address</Text>
          <br />
          <Text type="secondary">123 Main St, Santa Cruz, CA 95060</Text>
        </div>
        <div className='flex justify-between'>
          <Button>Detials</Button>
          <Button>Cancel</Button>
        </div>
      </Space>
    </Card>
  );
}