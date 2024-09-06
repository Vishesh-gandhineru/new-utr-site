"use client"

import React from 'react';
import { Button, Dropdown, message } from 'antd';
import type { MenuProps } from 'antd';
import { ShareAltOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined, LinkOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      case 'copyLink':
        navigator.clipboard.writeText(url).then(() => {
          message.success('Link copied to clipboard!');
        }).catch(() => {
          message.error('Failed to copy link');
        });
        break;
    }
  };

  const items: MenuProps['items'] = [
    {
      key: 'facebook',
      icon: <FacebookOutlined />,
      label: 'Facebook',
    },
    {
      key: 'twitter',
      icon: <TwitterOutlined />,
      label: 'Twitter',
    },
    {
      key: 'linkedin',
      icon: <LinkedinOutlined />,
      label: 'LinkedIn',
    },
    {
      key: 'whatsapp',
      icon: <WhatsAppOutlined />,
      label: 'WhatsApp',
    },
    {
      key: 'email',
      icon: <MailOutlined />,
      label: 'Email',
    },
    {
      key: 'copyLink',
      icon: <LinkOutlined />,
      label: 'Copy Link',
    },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['hover']}>
      <button className='flex  items-center gap-2 text-gray' onClick={handleShare}>
        <span className=" w-fit p-2 border border-gray rounded-full grid place-content-center">
          <Share2 className=" stroke-gray w-5 h-5" />
          </span>
        Share
      </button>
    </Dropdown>
  );
};

export default ShareButton;